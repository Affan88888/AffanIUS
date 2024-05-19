public class Main {

    public static void main(String[] args) {
        int[] array = {2, 5, 1, 8, 9, 12, 17, 4};

        System.out.println("Original array:");
        AffanKapidzicMergesort.printArray(array);

        AffanKapidzicMergesort.mergeSort(array, 0, array.length - 1);

        System.out.println("\nSorted array:");
        AffanKapidzicMergesort.printArray(array);
    }
}
