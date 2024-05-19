// This is the main method that is used for demonstrating
// the functionality of the code

public class App2MainMethod {
    public static void main(String[] args) {
        App2 pq = new App2(); // new object called pq is created from the App2 class
        pq.insert(7); // insert elements into the priority queue
        pq.insert(9);
        pq.insert(10);
        pq.insert(8);
        pq.insert(6);

        System.out.println("Priority Queue: ");
        pq.display();   // displays the elements in the priority queue

    }
}