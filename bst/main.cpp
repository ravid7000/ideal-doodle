#include <iostream>
using namespace std;

struct Tree {
    int data;
    struct Tree *left, *right;
    Tree (int data) {
        this->data = data;
        left = right = NULL;
    }
};

void printPostOrder(Tree* node) {
    if (node == NULL)
        return;

    printPostOrder(node->left);
    printPostOrder(node->right);

    cout << node->data << " ";
}

int main() {
    Tree *root = new Tree(1);
    root->left = new Tree(2);
    root->right = new Tree(3);
    root->left->left = new Tree(4);
    root->left->right = new Tree(5);

    cout << "Post order traversal" << endl;
    printPostOrder(root);

    return 0;
}

