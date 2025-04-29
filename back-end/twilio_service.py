from twilio.rest import Client
from settings import *

client = Client(ACCOUNT_SID, AUTH_TOKEN)

def enviar_sms(numero):
    message = client.messages.create(
        body="TEste",
        from_=TWILIO_NUMBER,
        to=numero
    )
    return message