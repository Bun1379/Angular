import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-palindrome-checker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './palindrome-checker.component.html',
  styleUrls: ['./palindrome-checker.component.css']
})
export class PalindromeCheckerComponent {
  inputString: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(): void {
    // Chuyển chuỗi về chữ thường và loại bỏ khoảng trắng
    const normalizedString = this.inputString.toLowerCase().replace(/\s+/g, '');
    // Kiểm tra xem chuỗi có đối xứng không
    this.isPalindrome = normalizedString === normalizedString.split('').reverse().join('');
  }
}
