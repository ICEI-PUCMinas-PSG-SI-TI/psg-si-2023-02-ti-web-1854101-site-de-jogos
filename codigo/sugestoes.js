export class FormPost {
    constructor(idForm, idtextarea, idUlPost) {
        this.amountButtons = 0;
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idtextarea);
        this.ulPost = document.getElementById(idUlPost);
        this.addSubmit();
    }

    onSubmit(func) {
        this.form.addEventListener('submit', func);
    }

    formValidate(value) {
        if (value == '' || value == null || value == undefined || value.length < 3) {
            return false;
        }
        return true;
    }

    getTime(){
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return`${hour}h ${minutes}min`
    }

    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();

            if (this.formValidate(this.textarea.value)) {
                const time = this.getTime();
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                newPost.innerHTML = `
                <div class="infoUserPost">
                    <div class="imgUserPost"></div>
                    <div class="nameAndHour">
                        <strong>Henrique Sousa</strong>
                        <p>${time}</p>
                    </div>
                </div>
                <p>${this.textarea.value}</p>
                <div class="actionBtnPost">
                    <button type="button" id="clickButton${this.amountButtons}" onclick="curtir(${this.amountButtons})" class="filesPost like"><img src="img.svg" alt="">Curtir</button>
                    <span id="clickCount${this.amountButtons}">0</span>
               
                </div>
                `;
                this.ulPost.appendChild(newPost);
                this.textarea.value = '';

                this.amountButtons++;
            }
        };

        this.onSubmit(handleSubmit);
    }
}

const postForm = new FormPost('formPost', 'textarea', 'posts');


const year = new Date().getFullYear();
document.querySelector(".footer p").innerHTML = `&copy;${year} - COPYRIGHT - NO TOXIC ZONE S.A. TODOS OS DIREITOS RESERVADOS.`;



