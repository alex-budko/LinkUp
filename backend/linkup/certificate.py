import cv2
import datetime

CERT_PATH = "linkup/certificate.png"

import time
import base64

def generate_certificate(name, hours: int, date=datetime.datetime.now()):
    coe = cv2.imread(CERT_PATH)

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
            return base64.b64encode(f.read()).decode("utf-8")
    except:
        return None
