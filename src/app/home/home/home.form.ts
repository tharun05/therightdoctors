import { FormGroup } from '@angular/forms';
import { AppFormGroup } from './../../shared/app.form';

export class HomeForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("user_name", this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl("user_email", this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl("user_confirmEmail", this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl("user_number", this.getController(null, this.TYPE_NUMBER, null, 50));
        group.addControl("user_url", this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl("user_occupation", this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl("user_password", this.getController(null, this.TYPE_PASSWORD, null, 50));
        group.addControl("user_repeatPassword", this.getController(null, this.TYPE_PASSWORD, null, 50));
        group.addControl("user_telephone", this.getController(null, this.TYPE_NUMBER, null, 50));
        group.addControl("user_textarea", this.getController(null, this.TYPE_DATA, null, 50));
    }
}