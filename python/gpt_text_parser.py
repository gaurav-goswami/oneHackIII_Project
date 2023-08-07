import re

user_input = ""

access_file = open('access_token.txt', 'r')
access_token = access_file.read()
access_file.close()

request_info = open('zoom_api_instructions.txt', 'r')
request_string = str(request_info.read())
request_info.close()

from revChatGPT.V1 import Chatbot
chatbot = Chatbot(config={
  "access_token": str(access_token)
})

prompt = """using the following format please return ONLY a dictionary that represents a Zoom meeting that's described below.  do not say anything other than the dictionary""" + user_input + request_string

response = ""
for data in chatbot.ask(
  prompt
):
    response = data["message"]
print(response)

pattern = r"\{.*$"
matches = re.findall(pattern,response,re.DOTALL)

pre_json=matches[0]

pattern= r"^.*\}"
matches = re.findall(pattern,pre_json,re.DOTALL)

json=matches[0]
