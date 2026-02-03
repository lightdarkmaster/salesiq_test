"""
This module contains two functions that calculate the square of a given number.

The first function, squared(n), uses the formula for the sum of consecutive odd numbers to calculate the square of n.

The second function, anotherway(n), simply multiplies n by itself to calculate the square.

"""

def squared(n):
    """
    This function uses the formula for the sum of consecutive odd numbers to calculate the square of n.

    Parameters:
    n (int): The number to calculate the square of.

    Returns:
    int: The final square value.

    """
    return n * (n + 1) // 2


def anotherway(n):
    """
    This function multiplies n by itself to calculate the square.

    Parameters:
    n (int): The number to calculate the square of.

    Returns:
    None

    """
    print(f"{n} squared = {n * n}")

