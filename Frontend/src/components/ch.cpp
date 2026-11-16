
#include <bits/stdc++.h>
using namespace std;

vector<string> checkPasswords(vector<string> passwords,
                              vector<string> commonWords) {
    vector<string> result;

    for (string password : passwords) {
        bool weak = false;

        // Condition 1: Length less than 6
        if (password.length() < 6) {
            weak = true;
        }

        bool lower = false;
        bool upper = false;
        bool digit = false;

        // Check character types
        for (char c : password) {
            if (islower(c))
                lower = true;
            else if (isupper(c))
                upper = true;
            else if (isdigit(c))
                digit = true;
        }

        // Conditions 2, 3, 4
        if ((lower && !upper && !digit) ||
            (upper && !lower && !digit) ||
            (digit && !lower && !upper)) {
            weak = true;
        }

        // Condition 5: Contains a common word
        for (string word : commonWords) {
            if (password.find(word) != string::npos) {
                weak = true;
                break;
            }
        }

        if (weak)
            result.push_back("weak");
        else
            result.push_back("strong");
    }

    return result;
}

int main() {
    vector<string> passwords = {
        "abcdef",
        "ABCDEF",
        "123456",
        "Abc123",
        "Abc123hello"
    };

    vector<string> commonWords = {
        "hello", "admin", "password"
    };

    vector<string> result =
        checkPasswords(passwords, commonWords);

    for (string s : result) {
        cout << s << '\n';
    }

    return 0;
}
