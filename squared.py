n = 5

def squared(n):
    square = 0
    odd = 1

    for i in range(1, n + 1):
        square += odd
        print(f"{i} squared = {square}")
        odd += 2

    return square


def anotherway(n):
    n = 5
    square = 0

    for _ in range(n):
        square += n

    print(f"{n} squared = {square}")

