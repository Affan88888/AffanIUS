public class Main {
    public static void main(String[] args) {
        LinkyList list1 = new LinkyList();

        //1 inserting elements 
        list1.insertFirst(5);
        list1.insertFirst(2);
        list1.insertFirst(8);
        list1.insertFirst(2);
        list1.insertFirst(7);
        list1.insertFirst(6);
        list1.insertFirst(7);
        
        //2 outputs the display of a list
        System.out.print("Linked List: "); 
        list1.displayList();

        //3 counts duplicates
        int duplicateCount = list1.countDuplicates();
        System.out.println("Number of duplicates: " + duplicateCount);

        //4 removes duplicates and outputs a new list of elements
        list1.removeDuplicates();
        System.out.print("Linked list after removing duplicates: ");
        list1.displayList();

        //5 swaps two nodes and outputs a new list with the swapped nodes
        list1.swapNodes(6, 8);
        System.out.print("Linked list after swapping nodes: ");
        list1.displayList();

        //6 Sorts the list and displays the new sorted list
        list1.sort();
        System.out.print("Sorted linked list: ");
        list1.displayList();
    }
  
  }
  