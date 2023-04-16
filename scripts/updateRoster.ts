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
    id: _.get(player, 'id'),
    number: _.get(player, 'jersey', 'n/a'),
    first_name: _.get(player, 'firstName'),
    last_name: _.get(player, 'lastName'),
    position: _.lowerCase(_.get(player.position, 'abbreviation')),
    height: _.get(player, 'displayHeight'),
    weight: _.toString(_.get(player, 'weight')),
    age: _.toString(_.get(player, 'age')),
    years_pro: _.toString(_.get(player.experience, 'years')),
    college: _.get(player.college, 'shortName', 'n/a'),
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
