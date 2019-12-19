#include <iostream>

using namespace std;

void findPrimeNumbers(int n) {
    if (n == 0 || n == 1) {
        cout << "No prime";
    }

    bool prime[n + 1];
    memset(prime, true, n + 1);

    for (int p = 2; p <= n; p++) {
        if (prime[p] == true) {
            cout << p << " ";
            for (int i = p * 2; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }
    cout << endl;
}

int main() {
    findPrimeNumbers(200);
}

