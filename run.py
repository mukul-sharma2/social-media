
import subprocess
import sys
import os
import threading

BASE = os.path.dirname(os.path.abspath(__file__))

def show_output(name, process):
    for line in process.stdout:
        print(f"[{name}] {line}", end="", flush=True)

# Start Flask
flask = subprocess.Popen(
    [sys.executable, "-u", "app.py"],
    cwd=os.path.join(BASE, "backend"),
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    bufsize=1
)

# Start React
react = subprocess.Popen(
    ["npm", "run", "dev"],
    cwd=os.path.join(BASE),
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    bufsize=1,
    shell=True
)

# Display both outputs
t1 = threading.Thread(
    target=show_output, args=("FLASK", flask)
)

t2 = threading.Thread(
    target=show_output, args=("REACT", react)
)

t1.start()
t2.start()

try:
    t1.join()
    t2.join()

except KeyboardInterrupt:
    flask.terminate()
    react.terminate()
