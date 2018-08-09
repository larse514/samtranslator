import json
import datetime
import numpy as np
from yaml import load, safe_dump


def main(event, context):    
    data = json.loads(event['body'])

    response = {
        "statusCode": 200,
        "body": safe_dump(data,default_flow_style=False )
    }

    return response

if __name__ == "__main__":
    main('', '')