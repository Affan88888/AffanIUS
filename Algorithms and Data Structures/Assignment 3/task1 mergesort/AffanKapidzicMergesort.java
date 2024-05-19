public class AffanKapidzicMergesort {

    //merge method to merge two sorted halves of an array
    public static void merge(int[] a, int lb, int mid, int ub) {
        int i = lb;              //starting index of the left subarray
        int j = mid + 1;         //starting index of the right subarray
        int k = lb;              //index for the temporary merged array
        int[] b = new int[a.length];  //temporary array to store merged result

        //compare elements from the left and right subarrays and merge them
        while (i <= mid && j <= ub) {
            if (a[i] % 2 == 0 && a[j] % 2 == 0) { //if the 2 elements that are being compared are both even
                if (a[i] <= a[j]) {
                    b[k] = a[i];
                    i++;  
                }
                else {
                    b[k] = a[j];
                    j++;
                }
            }
            else if(a[i] % 2 == 0 && a[j] % 2 == 1 ||
                    a[i] % 2 == 1 && a[j] % 2 == 0) { //if 1 element is even and 1 element is odd
                if (a[i] % 2 == 0) {
                    b[k] = a[i];
                    i++;
                }
                else if(a[j] % 2 == 0) {
                    b[k] = a[j];
                    j++;
                }
            }
            else {
                if (a[i] <= a[j]) { //if both elements are odd
                    b[k] = a[i];
                    i++;
                }
                else {
                    b[k] = a[j];
                    j++;
                }
            }
            
            k++;
        }

        //copy remaining elements from the right subarray, if there are any
        if (i > mid) {
            while (j <= ub) {
                b[k] = a[j];
                j++;
                k++;
            }
        } else {
            //copy remaining elements from the left subarray, if there are any
            while (i <= mid) {
                b[k] = a[i];
                i++;
                k++;
            }
        }

        //copy merged elements back to the original array
        for (k = lb; k <= ub; k++) {
            a[k] = b[k];
        }
    }

    //recursive mergeSort method
    public static void mergeSort(int[] a, int lower, int upper) {
        if (lower == upper) {
            //base case is if (lower == upper), which means array has one element, which means it is already sorted
            return;
        } else {
            int mid = (lower + upper) / 2;   //calculate the middle index
            mergeSort(a, lower, mid);        //recursively sort the left subarray
            mergeSort(a, mid + 1, upper);    //recursively sort the right subarray
            merge(a, lower, mid, upper);     //merge the sorted subarrays
        }
    }

    //method to print an array
    public static void printArray(int[] array) {
        for (int value : array) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
