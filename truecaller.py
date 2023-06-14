from truecallerpy import search_phonenumber
import json

id = "a1i09--aOAHVJV0V0CzYawtLqNTNh1xll7-eAPeUbvmapuzLPH7igWoiY6UiEaiU"
# To know your installation id run `truecallerpy -i` on terminal or command prompt
num = input('num :')
# search_phonenumber( "PHONE_NUMBER","COUNTRY_CODE","INSTALLATION_ID")
data = search_phonenumber(num,"ID", id)
# ==> search_phonenumber("+12093031250","IN", id)
print(data)