
public class App2 {
    int[] queue; // array that stores the elements
    int size; // current number of elements in the queue
    int capacity; // size of the array

    // This is a constructor for initializing the queue and its properties
    App2()
    {
        capacity = 5; // capacity size
        queue = new int[capacity]; // create an array of the specified capacity
        size = 0; // initialize the size to 0
    }


    // This is the method to insert an element into the priority queue
    public void insert(int data) 
    {
        if (size == queue.length)
         {
            System.out.println("Queue is full! Cannot insert! " + data);
            return;
        }

        int index = size - 1;

        // this is to move elements to the right to make space for the new value while also maintaining descending order
        while (index >= 0 && queue[index] < data)
         {
            queue[index + 1] = queue[index];
            index--;
        }

        // this is to insert the new value in the correct position
        queue[index + 1] = data;
        size++;
    }
    



    // This is the method to check if the queue is empty
    public boolean isEmpty()
     {
        return size == 0;
    }


    
    // This is the method to remove and return the highest-priority element
    public int remove() 
    {
        if (isEmpty()) 
        {
            System.out.println("Queue is empty! Cannot remove!");
            return -1;
        }

        int removedItem = queue[0]; // this is to get the highest-priority element

        // this is to shift the remaining elements to the left to fill the gap
        for (int i = 1; i < size; i++) 
        {
            queue[i - 1] = queue[i];
        }   

        size--; 
        return removedItem; 
    }




    // This is the method to display the elements in the queue
    public void display()
     {
        if (isEmpty()) 
        {
            System.out.println("Queue is empty!");
            return;
        }

        // this is to print the elements in the queue
        for (int i = 0; i < size; i++)
         {
            System.out.print(queue[i] + " ");
        }
        System.out.println();
    }

}
