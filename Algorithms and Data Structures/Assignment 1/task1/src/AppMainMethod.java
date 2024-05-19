// This is the main method that is used for demonstrating
// the functionality of the code

public class AppMainMethod {
     public static void main(String[] args) {
    App st = new App(); // new object called st is created from the App class
    st.push1(11);   // different methods are now used on the object st
    st.push1(12);
    st.push1(13);
    st.push1(14);
    st.push1(15);

    st.push2(21);
    st.push2(22);
    st.push2(23);
    st.push2(24);

    st.push3(31);
    st.push3(32);
    st.push3(33);
    st.push3(34);
    st.push3(35);

    st.push4(41);
    st.push4(42);
    st.push4(43);

System.out.println("Stack1 is empty: " + st.isEmpty1());    //Here it is printed if the stacks are empty or not
System.out.println("Stack2 is empty: " + st.isEmpty2());
System.out.println("Stack3 is empty: " + st.isEmpty3());
System.out.println("Stack4 is empty: " + st.isEmpty4());
System.out.println();

System.out.println("Stack1 is full: " + st.isFull1());      //Here it is printed if the stacks are full or not
System.out.println("Stack2 is full: " + st.isFull2());
System.out.println("Stack3 is full: " + st.isFull3());
System.out.println("Stack4 is full: " + st.isFull4());
System.out.println();

System.out.println("Total capacity of the array is: " + st.capacity);   // Total capacity of the array is printed here
System.out.println();
    st.display();   // displays the array with all of its elements
}
}