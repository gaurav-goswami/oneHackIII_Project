import os
import re

access_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ6ZXh1YW4wMDdAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1vY1RFSTkzWkVzbEdjbGg2WGh2TXI2TGcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6IndpbmRvd3NsaXZlfGFiZDdmMGRmNmIyNTg4NzQiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjkxMzc2OTkxLCJleHAiOjE2OTI1ODY1OTEsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIn0.G8edeZR4ZrcIdnh71oCEc7FWbe_2zlqTd_HRoujJIr0I_S4xE-rARMULqcV9ZvEbE1Q9Xqz5cxyIcZT-d2uTU7ACpRQlBi6CfjtOUC7DYI3D-YzyvJUHHh0bUSTnIPCfVeWGWqtxz-ZgM3QbOZOlG1yBpd4kFqNeE-sgH-zL0rrgwdZzCpeNbFbUGzvg-9ZFXboCnHOJ7beLIma_srjcRO4DnIgObgpyToheNC7KZ-LWXutptopvDWOIMTuMl3hrm50c0cZJ9ZWwaOCgNfm1iIwterduHjVwx8By1JHpfu3PzlyiO8HE-m9Xj08NA5dYqwUfkjEg2-bWmOic7Ua9og"

from revChatGPT.V1 import Chatbot


def create_meeting(user_input: str):
    request_info = open("zoom_api_instructions.txt", "r")
    request_string = str(request_info.read())
    request_info.close()

    chatbot = Chatbot(config={"access_token": str(access_token)})

    prompt = (
        """using the following format please return ONLY a dictionary that represents a Zoom meeting that's described below.  do not say anything other than the dictionary.  indicate the time zones using the formats below as well, do not use any other format for the time zone."""
        + user_input
        + request_string
    )

    response = ""
    for data in chatbot.ask(prompt):
        response = data["message"]

    pattern = r"\{.*$"
    matches = re.findall(pattern, response, re.DOTALL)

    pre_json = matches[0]

    pattern = r"^.*\}"
    matches = re.findall(pattern, pre_json, re.DOTALL)

    json = matches[0]
    return json


print(create_meeting("meeting in pakistan tomorrow at 11am"))
