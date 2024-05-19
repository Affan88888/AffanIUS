public class Main {

    public static void main(String[] args) { 
        char[] array = {'f', 'v', 'n' ,'c', 'r', 'a', 'a', 'b'};

        System.out.println("Original array: ");
        AffanKapidzicQuicksort.printArray(array);

        AffanKapidzicQuicksort.quickSort(array, 0, array.length - 1);

        System.out.println("\nSorted array: ");
        AffanKapidzicQuicksort.printArray(array);
    }
}
