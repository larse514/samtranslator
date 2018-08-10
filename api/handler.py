import json
import datetime
import numpy as np
from yaml import load, safe_dump


def main(event, context):    
    data = json.loads(event['body'])
    body = {
        "message": safe_dump(data,default_flow_style=False )
    }
    response = {
        "statusCode": 200,
        "headers": { 
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : True
        }, 
        "body": json.dumps(body)
    }

    return response

if __name__ == "__main__":
    main('', '')