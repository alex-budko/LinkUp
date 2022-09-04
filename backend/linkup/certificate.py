import cv2
import datetime

CERT_PATH = "backend/linkup/certificate.png"

import time
from rest_framework.response import Response

def generate_certificate(name, hours: int, date=datetime.datetime.now()):
    coe = cv2.imread (CERT_PATH)

    font=cv2.FONT_HERSHEY_TRIPLEX
    cv2.putText(coe, name, (300,1010), font, 4, (0, 0, 0),
    10,
    cv2.LINE_8)

    cv2.putText(coe, str(hours), (763,1258), font, 1, (0, 0, 0),
    2,
    cv2.LINE_8)

    cv2.putText(coe, str(date)[:16], (950,1850), font, 1, (0, 0, 0),
    2,
    cv2.LINE_8)

    cv2.imwrite("new_cert.png", coe)

    time.sleep(.5)
    try: 
        with open("new_cert.png", "rb") as f:
            return f.read()
    except:
        return None

# print(generate_certificate("John Doe", 10, datetime.datetime.now()))