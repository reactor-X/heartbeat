import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Credentials } from '../../model/Credentials';
import { FadeInAndOut } from '../../model/interaction_pattern/animations/transitions/FadeInAndOut';

@Component({
  moduleId: module.id,
  selector: 'heartbeat',
  templateUrl: '../../templates/main.login.form.html',
  providers: [DashboardService],
  animations: [FadeInAndOut]
})

export class LoginForm implements OnInit{
  loginForm:FormGroup;
  stateExpression: string; //To track animation
  public submitted: boolean; // keep track on whether form is submitted;
  public events: any[] = []; // use later to display form changes
  
  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization
    
  ngOnInit() {
        this.checkSession();
        // we will initialize our form model here
         this.loginForm = this._fb.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        });

        this.subscribeToFormChanges();
        this.stateExpression = 'in'; 
        
  }

  // Event Bindings 
  subscribeToFormChanges() {
    // initialize stream
    const loginFormChanges$ = this.loginForm.valueChanges;

    // subscribe to the stream 
    loginFormChanges$.subscribe(formState => this.events
        .push({ event: 'STATUS CHANGED', object: formState }));
    }


  // Actions
  save(model: Credentials, isValid: boolean) {
        this.submitted = true; 
        // check if model is valid
        // if valid, call API to save customer
        console.log(this.events);
        this.stateExpression = 'out'; 
    }

  checkSession(){

  }
}