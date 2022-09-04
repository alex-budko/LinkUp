import cv2
import datetime

CERT_PATH = "certificate.png"

def generate_certificate(name, date):
    coe = cv2.imread ("Certificate of Excellence.png")
    now = datetime.datetime.now()

    font=cv2.FONT_HERSHEY_TRIPLEX
    cv2.putText(coe, "James Bond", (300,1010), font, 4, (0, 0, 0),
    10,
    cv2.LINE_8)

    font2=cv2.FONT_HERSHEY_TRIPLEX
    cv2.putText(coe, "560", (763,1258), font, 1, (0, 0, 0),
    2,
    cv2.LINE_8)

    font3=cv2.FONT_HERSHEY_TRIPLEX
    cv2.putText(coe, str(now)[:16], (950,1850), font, 1, (0, 0, 0),
    2,
    cv2.LINE_8)

cv2.imshow("certificate", coe)
cv2.waitKey(0)