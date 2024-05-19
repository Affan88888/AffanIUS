public class AffanKapidzicQuicksort {

    //method to swap elements in the array
    public static void swap(char a[], int i, int j) {
        char temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    //method to compute the pivot index based on ASCII table
    private static int getPivotIndex(char a[], int lb, int ub) {
        int sum = 0;

        for (int i = lb; i <= ub; i++) {
            sum = sum + a[i];
        }

        int pivotIndex = (sum / (ub - lb + 1)) % (ub - lb + 1);
        return pivotIndex + lb;
    }

    //method to partition the array and return the pivot index
    public static int partition(char a[], int lb, int ub) {
        int pivotIndex = getPivotIndex(a, lb, ub);

        //swap the pivot with the element at the left index
        swap(a, lb, pivotIndex);

        char pivot = a[lb];
        int left = lb + 1;
        int right = ub;

        //loop to rearrange elements so that elements that are less than pivot are
        //on the left and elements greater than pivot are on the right
        while (left <= right) {
            while (left <= right && a[left] <= pivot) {
                left++;
            }
            while (left <= right && a[right] > pivot) {
                right--;
            }
            if (left <= right) {
                swap(a, left, right);
            }
        }

        //swap the pivot with the element at the right index
        swap(a, lb, right);

        //return the pivot index
        return right;
    }

    //recursive quickSort method
    public static void quickSort(char a[], int lb, int ub) {
        //base case is that (lb == up), which means there is one element in the subbaray
        //this checks if there is more than one element in the subarray
        if (lb < ub) {
            //find the pivot index using partition method
            int location = partition(a, lb, ub);

            //recursively sort the subarrays on the left and right of the pivot
            quickSort(a, lb, location - 1);
            quickSort(a, location + 1, ub);
        }
    }

    //method to print an array
    public static void printArray(char a[]) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }
}
