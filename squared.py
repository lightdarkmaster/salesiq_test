"""
This module contains two functions that calculate the square of a given number.

The first function, squared(n), uses a for loop to iterate from 1 to n and calculate the square of each number. It then prints out the square of each number and returns the final square value.

The second function, anotherway(n), uses a for loop to iterate from 0 to n and simply adds the value of n to the running total for each iteration. It then prints out the final square value.

"""

n = 5

def squared(n):
    """
    This function uses a for loop to calculate the square of each number from 1 to n.

    Parameters:
    n (int): The number to calculate the square of.

    Returns:
    int: The final square value.

    """
    square = 0
    odd = 1

    for i in range(1, n + 1):
        square += odd
        print(f"{i} squared = {square}")
        odd += 2

    return square


def anotherway(n):
    """
    This function uses a for loop to calculate the square of a given number.

    Parameters:
    n (int): The number to calculate the square of.

    Returns:
    None

    """
    n = 5
    square = 0

    for _ in range(n):
        square += n

    print(f"{n} squared = {square}")

