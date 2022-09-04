import cv2
import datetime

CERT_PATH = "certificate.png"

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

    print(type(coe))

    return coe