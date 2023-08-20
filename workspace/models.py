from dataclasses import dataclass
from bson import ObjectId

@dataclass
class PrimaryAddress:
    def __init__(self, StreetAddress, City, Province, PostalCode):
        self.StreetAddress = StreetAddress
        self.City = City
        self.Province = Province
        self.PostalCode = PostalCode
        
    def to_dict(self):
        return {
            'StreetAddress': self.StreetAddress,
            'City': self.City,
            'Province': self.Province,
            'PostalCode': self.PostalCode
        }
   

@dataclass
class User:
    def __init__(self, _id, FirstName, LastName, PrimaryAddress):
        self._id = convert_objectid(_id)
        self.FirstName = FirstName
        self.LastName = LastName
        self.PrimaryAddress = PrimaryAddress
    def to_dict(self):
        return {
            '_id': self._id,
            'FirstName': self.FirstName,
            'LastName': self.LastName,
            'PrimaryAddress':self.PrimaryAddress if self.PrimaryAddress else None
        }

def convert_objectid(obj):
    if isinstance(obj, ObjectId):
        return str(obj)
    return obj