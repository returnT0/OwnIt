import {Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit, OnDestroy {
  domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // min 6 chars, at least 1 letter and 1 number
  domain = '';
  email = '';
  password = '';

  firstText = 'OwnIt';
  secondText = 'get your domain now';
  displayedText = '';

  showInput = false;
  showDomainInput = true;
  showEmailInput = false;
  showPasswordInput = false;
  showSubmitButton = false;

  private typingIndex = 0;
  private intervalId: any;
  private typingSpeed = 150;
  private deletingSpeed = 100;
  private pauseDuration = 2000;

  ngOnInit() {
    this.startOver();
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  onDomainChange() {
    this.validateInputs();
  }

  onEmailChange() {
    this.validateInputs();
  }

  onPasswordChange() {
    this.validateInputs();
  }

  startTypingEffect(text: string, callback: () => void) {
    this.displayedText = '';
    this.typingIndex = 0;

    const typeNextCharacter = () => {
      if (this.typingIndex < text.length) {
        this.displayedText += text[this.typingIndex];
        this.typingIndex++;
        this.intervalId = setTimeout(typeNextCharacter, this.typingSpeed);
      } else {
        setTimeout(callback, 4000);
      }
    };

    typeNextCharacter();
  }

  validateInputs() {
    this.showEmailInput = this.domainPattern.test(this.domain);
    if (this.showEmailInput) {
      this.showPasswordInput = this.emailPattern.test(this.email);
    } else {
      this.showPasswordInput = false;
    }

    if (this.showPasswordInput) {
      this.showSubmitButton = this.passwordPattern.test(this.password);
    } else {
      this.showSubmitButton = false;
    }
  }

  handleTextClick() {
    const textElement = document.querySelector('.typing-effect');
    textElement?.classList.add('swipe-right');

    setTimeout(() => {
      this.showInput = true;
    }, 500);
  }

  deleteEffect(callback: () => void) {
    const deleteCharacter = () => {
      if (this.displayedText.length > 0) {
        this.displayedText = this.displayedText.substring(0, this.displayedText.length - 1);
        this.intervalId = setTimeout(deleteCharacter, this.deletingSpeed);
      } else {
        if (callback) callback();
      }
    };

    deleteCharacter();
  }

  startOver() {
    this.startTypingEffect(this.firstText, () => {
      this.deleteEffect(() => {
        this.startTypingEffect(this.secondText, () => {
          this.deleteEffect(() => {
            setTimeout(() => this.startOver(), this.pauseDuration);
          });
        });
      });
    });
  }
}
