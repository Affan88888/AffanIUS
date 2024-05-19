//definition of a node in the binary search tree
class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}
//binary search tree class
public class AffanKapidzicBST {
    Node root;

    AffanKapidzicBST() {
        root = null;
    }

    //inserting a key into the binary search tree
    void insert(int key) {
        root = insertRecursive(root, key);
    }

    Node insertRecursive(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }

        if (key < root.key) {
            root.left = insertRecursive(root.left, key);

        } else if (key > root.key) {
            root.right = insertRecursive(root.right, key);
        }

        return root;
    }

    //a)
    //search for a target value and print the path(s)
    void searchAndPrintPath(int target) {
        System.out.println("Target: " + target);
        Node result = search(root, target);
        if (result != null) {
            System.out.print("Path(s): ");
            printPath(root, target);
            System.out.println();
        } else {
            System.out.println("Target value is not found in the BST.");
        }
    }

    Node search(Node root, int target) {
        if (root == null || root.key == target) {
            return root;
        }

        if (target < root.key) {
            return search(root.left, target);
        }

        return search(root.right, target);
    }

    void printPath(Node root, int target) {
        if (root != null) {
            System.out.print(root.key + " ");
            if (root.key == target) {
                return;
            } else if (target < root.key) {
                printPath(root.left, target);
            } else {
                printPath(root.right, target);
            }
        }
    }

    //b)
    //find the next greater element of the target value in the binary search tree
    void findNextGreater(int target) {
        Node result = findNextGreaterRecursive(root, target, null);
        if (result != null) {
            System.out.println("Output: " + result.key + " is next greater element of the target value");
        } else {
            System.out.println("No greater element is found in the BST.");
        }
    }

    Node findNextGreaterRecursive(Node root, int target, Node successor) {
        if (root == null) {
            return successor;
        }

        if (root.key == target) {
            //if the target has a right subtree, find the leftmost node of that subtree
            if (root.right != null) {
                return findMinimal(root.right);
            }
        } else if (target < root.key) {
            //update the successor and move to the left subtree
            return findNextGreaterRecursive(root.left, target, root);
        } else {
            //move to the right subtree
            return findNextGreaterRecursive(root.right, target, successor);
        }

        return null;
    }

    Node findMinimal(Node node) {
        Node current = node;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    //c)
    //Inorder traversal
    void inOrder() {
        System.out.print("Inorder Traversal: ");
        inOrderRecursive(root);
        System.out.println();
    }

    void inOrderRecursive(Node root) {
        if (root != null) {
            inOrderRecursive(root.left);
            System.out.print(root.key + " ");
            inOrderRecursive(root.right);
        }
    }

    //Preorder traversal
    void preOrder() {
        System.out.print("Preorder Traversal: ");
        preOrderRecursive(root);
        System.out.println();
    }

    void preOrderRecursive(Node root) {
        if (root != null) {
            System.out.print(root.key + " ");
            preOrderRecursive(root.left);
            preOrderRecursive(root.right);
        }
    }

    //Postorder traversal
    void postOrder() {
        System.out.print("Postorder Traversal: ");
        postOrderRecursive(root);
        System.out.println();
    }

    void postOrderRecursive(Node root) {
        if (root != null) {
            postOrderRecursive(root.left);
            postOrderRecursive(root.right);
            System.out.print(root.key + " ");
        }
    }

    //d)
    //count the total number of nodes in the binary search tree
    int countNodes() {
        return countNodesRecursive(root);
    }

    int countNodesRecursive(Node root) {
        if (root == null) {
            return 0;
        }
        return 1 + countNodesRecursive(root.left) + countNodesRecursive(root.right);
    }


    public static void main(String[] args) {
        int[] numbers = {4, 1, 8, 6, 3, 9, 7 };

        AffanKapidzicBST bst = new AffanKapidzicBST();

        for (int num : numbers) {
            bst.insert(num);
        }

        int target = 6;
        bst.searchAndPrintPath(target);

        bst.findNextGreater(target);

        System.out.println();
        bst.inOrder();
        bst.preOrder();
        bst.postOrder();

        System.out.println();
        int totalNodes = bst.countNodes();
        System.out.println("Number of nodes: " + totalNodes);
    }
}
