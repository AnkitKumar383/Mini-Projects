import time

sec = int(input("Enter the number of seconds: "))

def countdown(sec):
  while sec:
    mins, secs = divmod(sec, 60)
    timer = '{:02d}:{:02d}'.format(mins, secs)
    print(timer, end="\r")
    time.sleep(1)
    sec -= 1
  print("Time up!")

countdown(sec)