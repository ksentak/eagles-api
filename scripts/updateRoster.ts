import axios from 'axios';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

const grabUpdatedRoster = async () => {
  const url =
    'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/21/roster';
  const res = await axios.get(url);
  const { data } = res;
  const { athletes } = data;
  return athletes;
};

const organizeRoster = (roster) => {
  const combinedRoster = _.reduce(
    roster,
    (acc, curr) => {
      return acc.concat(curr.items);
    },
    [],
  );

  const officialRoster = _.map(combinedRoster, (player) => ({
    id: player?.id,
    number: player?.jersey,
    first_name: player?.firstName,
    last_name: player?.lastName,
    position: _.lowerCase(player?.position?.abbreviation),
    height: player?.displayHeight,
    weight: _.toString(player?.weight),
    age: _.toString(player?.age),
    years_pro: _.toString(player?.experience?.years),
    college: player?.college?.shortName,
  }));

  return officialRoster;
};

const createRosterJson = (jsonObj) => {
  const filePath = path.join(__dirname, '..', '/src/officialRoster.json');
  fs.writeFile(filePath, JSON.stringify(jsonObj), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Roster data has been written to officialRoster.json');
  });
};

const updateRoster = async () => {
  const rawRoster = await grabUpdatedRoster();
  const officialRoster = await organizeRoster(rawRoster);
  createRosterJson(officialRoster);
};

updateRoster();
