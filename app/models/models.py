from pydantic import BaseModel
from typing import Union

class Player(BaseModel):
    id: str
    number: str
    first_name: str
    last_name: str
    position: str
    height: str
    weight: Union[int, str]
    age: Union[int, str]  
    years_pro: int
    college: str
