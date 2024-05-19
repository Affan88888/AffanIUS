// These are custom exception classes for when there is a stack overflow
// or stack underflow

class StackOverflowException extends RuntimeException { 
    public StackOverflowException(String message) {
        super(message);
    }
}

class StackUnderflowException extends RuntimeException {
    public StackUnderflowException(String message) {
        super(message);
    }
}


public class App {
    int top1;
    int top2;
    int top3;
    int top4;
    int capacity;
    int[] stack;

// This is a constructor for initializing the stack and its properties
App()
{
    capacity = 20;              // Total capacity of the array
    top1 = -1;                  // Initialize top1 for stack 1
    top2 = capacity/2;          // Initialize top2 for stack 2
    top3 = capacity/2 -1;       // Initialize top3 for stack 3
    top4 = capacity;            // Initialize top4 for stack 4
    stack = new int[capacity];  // Create the stack array
}

// These are the methods that are used for checking if a stack is empty
// and also methods for checking if a stack is full
public boolean isEmpty1()
{
    return top1 == -1; // Stack 1 is empty when top1 is -1
}

public boolean isFull1() 
{
    return top1 == (capacity / 4) - 1; // Stack 1 is full when top1 is at a quarter of the array
}


public boolean isEmpty2()
{
    return top2 == (capacity * 1/2); // Stack 2 is empty when top2 is at the middle position
}

public boolean isFull2() 
 {
    return top2 == (capacity * 1/4); // Stack 2 is full when top2 is at a quarter of the array
}


public boolean isEmpty3()
{
    return top3 == (capacity * 1/2) -1;  // Stack 3 is empty when top3 is just before the middle position
}

public boolean isFull3() 
{
    return top3 == (capacity * 3/4) - 1; // Stack 3 is full when top3 is just before three-quarters of the array
}


public boolean isEmpty4() 
{
    return top4 == capacity; // Stack 4 is empty when top4 is at the end of the array
}

public boolean isFull4() 
{
    return top4 == (capacity * 3/4); // Stack 4 is full when top4 is at three-quarters of the array
}






// These are the push methods for adding elements to the stacks
public int push1(int data)
{
    if(isFull1())
    {
        throw new StackOverflowException("Stack1 is doing overflow!"); // Throw exception if stack 1 is full
    }
    return stack[++top1] = data;
}

public int push2(int data)
{
    if(isFull2())
    {
        throw new StackOverflowException("Stack2 is doing overflow!"); // Throw exception if stack 2 is full
    }
    return stack[--top2] = data;
}

public int push3(int data)
{
    if(isFull3())
    {
        throw new StackOverflowException("Stack3 is doing overflow!"); // Throw exception if stack 3 is full
    }
    return stack[++top3] = data;
}

public int push4(int data)
{
    if(isFull4())
    {
        throw new StackOverflowException("Stack4 is doing overflow!"); // Throw exception if stack 4 is full
    }
    return stack[--top4] = data;
}



 // These are the pop methods for removing elements from the stacks
public int pop1()
{
    if(isEmpty1())
    {
        throw new StackUnderflowException("Stack1 is doing underflow!"); // Throw exception if stack 1 is empty
    }
    return stack[top1--];
}

public int pop2()
{
    if(isEmpty2())
    {
        throw new StackUnderflowException("Stack2 is doing underflow!"); // Throw exception if stack 2 is empty
    }
    return stack[top2++];
}

public int pop3()
{
    if(isEmpty3())
    {
        throw new StackUnderflowException("Stack3 is doing underflow!"); // Throw exception if stack 3 is empty
    }
    return stack[top3--];
}

public int pop4()
{
    if(isEmpty4())
    {
        throw new StackUnderflowException("Stack4 is doing underflow!"); // Throw exception if stack 4 is empty
    }
    return stack[top4++];
}


// These are the peek methods for getting the top element of the stacks
public int peek1()
{
    return stack[top1];
}

public int peek2()
{
    return stack[top2];
}

public int peek3()
{
    return stack[top3];
}

public int peek4()
{
    return stack[top4];
}


// This is the display method that is used to print the contents of the array
public void display()
{
    for(int i: stack)
    {
        System.out.println(i);
    }
}

}