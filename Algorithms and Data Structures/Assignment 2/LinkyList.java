import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class LinkyList {
private Link first;

public LinkyList() 
{
    this.first = null;
}


public void insertFirst(int data) //insertFirst method
{ 
    Link newLink = new Link(data);  //inserts element at the beginning of a list
    newLink.next = first;
    first = newLink;
}


public Link deleteFirst() //delete first method
{ 
    Link temp = first;
    first = first.next;
    return temp;
}


public void displayList() //display method
{  
    Link current = first;
    while (current != null)
     {
        System.out.print(current.data + " ");
        current = current.next; 
    }
    System.out.println();
}


public Link find(int data) //method for finding specific data
{    
    Link current = first;
    while (current != null && current.data != data) 
    {
        current = current.next;    
    }
    return current;
}
    

public int countDuplicates() //method for counting the number of duplicates
 {  
        Map<Integer, Integer> countMap = new HashMap<>();   //hashmap is used to store the count how many times each element occurs

        Link current = first;   //this traverses the list
        while (current != null) 
        {
            int data = current.data;
            countMap.put(data, countMap.getOrDefault(data, 0) + 1); //counts occurrences of each element
            current = current.next;
        }

        int duplicateCount = 0; //this counts the number of elemenets that occure more than once
        for (int count : countMap.values()) 
        {
            if (count > 1) 
            {
                duplicateCount++;
            }
        }

        return duplicateCount;
    }


public void removeDuplicates() //method for removing the duplicate elements
{
        //hashmap is used to store unique values that we encounter during traversal
        Set<Integer> uniqueValues = new HashSet<>();
        
        Link current = first;
        Link previous = null;

        while (current != null) //while there are still elements
        {
            int data = current.data;

            if (uniqueValues.contains(data)) //if the value is already in the set then it is a duplicate
            {
                previous.next = current.next; //this removes the duplicate by updating the next pointer of the previous link
            } else 
            {
                uniqueValues.add(data); //this adds the value to the set if it is not a duplicate
                previous = current;
            }

            current = current.next;
        }
    }


public void swapNodes(int data1, int data2) //method for swapping two nodes
     {
        
        Link previous1 = null, current1 = first;
        Link previous2 = null, current2 = first;

        while (current1 != null && current1.data != data1) //this traverses through the nodes until the node with data1 is found or until we traverse through the whole linked list
        {
            previous1 = current1;
            current1 = current1.next;
        }

        while (current2 != null && current2.data != data2) //this traverses through the nodes until the node with data2 is found or until we traverse through the whole linked list
         {
            previous2 = current2;
            current2 = current2.next;
        }

        if (current1 == null || current2 == null || data1 == data2) //this is for when at least one node is not found or if the two nodes that we want to swap have the same value
         {
            System.out.println("No swap is performed. Either one or both nodes not found, or the nodes have the same value.");
            return;
        }
        

        //this is if data1 is not the first of the list
        if (previous1 != null) 
        {
            previous1.next = current2;
        } 
        else 
        {
            //if data1 is the first, then update the first to be data2
            first = current2;
        }

        //this is if data2 is not the first of the list
        if (previous2 != null)
        {
            previous2.next = current1;
        }
         else 
        {
            //if data2 is the first, then update the first to be data1
            first = current1;
        }


        Link temp = current1.next;  //this is to swap the next pointers of the nodes
        current1.next = current2.next;
        current2.next = temp;

        System.out.println("Swapped nodes with data " + data1 + " and " + data2);
    }



public void sort() //method for sorting the nodes
 {
        if (first == null || first.next == null) //this checks if the list is empty or only has 1 element
        {
            return;
        }

        first = mergeSort(first); //mergesort is used to sort the linked list
    }

    private Link mergeSort(Link first)  //this is to recursively apply merge sort to the linked list
     {
        //this is a base case, checks if the list is empty or only has 1 element. If this is true return first
        if (first == null || first.next == null) 
        {
            return first;
        }

        Link middle = getMiddle(first); //this is used to split the linked list into two halves
        Link nextToMiddle = middle.next;
        middle.next = null;

        Link left = mergeSort(first);   //this recursively sorts the two halves
        Link right = mergeSort(nextToMiddle);

        return merge(left, right); //and this merges the sorted halves
    }

    private Link merge(Link left, Link right) //this is to merge the two sorted linked lists into a single one
    {
        Link result = null;

        //this is a base case to just return one list, if the other one is empty 
        if (left == null) 
        {
            return right;
        }
        if (right == null)
         {
            return left;
        }

        // Compare the data of the two nodes and merge them in ascending order
        if (left.data <= right.data) //this compares the data of the two nodes and merges them in ascending order
        {
            result = left;
            result.next = merge(left.next, right);
        } else 
        {
            result = right;
            result.next = merge(left, right.next);
        }

        return result;
    }

    private Link getMiddle(Link first) //this is to find the middle of the linked list
     {
        if (first == null) 
        {
            return null;
        }

        Link slow = first;
        Link fast = first.next;

        while (fast != null) 
        {
            fast = fast.next;
            if (fast != null) 
            {
                slow = slow.next;
                fast = fast.next;
            }
        }

        return slow;
    }

}