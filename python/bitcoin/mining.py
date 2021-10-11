import hashlib

my_str = "Welcome_to_Hacktoberfest"
nounce = 0
result_str = ""
while(nounce < 10000000000):
    result_str = hashlib.sha256((my_str + str(nounce)) .encode()).hexdigest()
    if(result_str[0:6] == "000000"):        # condition: Difficulty level
        break
    nounce += 1

print(result_str)
print(nounce)

# Result String - 000000f12e2a8820f12a4ac5ecab440cef19b888b23a9c2bf1d1d5e5b345ee40
# Nounce - 39824627
