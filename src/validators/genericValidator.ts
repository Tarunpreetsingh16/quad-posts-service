import { ValidationError } from "../common/exceptions/ValidationError"
import validator from "validator"

export class GenericValidator {
    protected isDataInvalid: boolean = false
    protected obj: any = null
    protected fieldName: string = ''
    protected errors: Array<ValidationError> = []
    private secretRegex: RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-+=])(?=.*\d).{8,}$/

    protected rule = (obj: any, fieldName: string) => {
        this.obj = obj
        this.fieldName = fieldName
        return this
    }

    protected isEmailValid = () => {
        if (!validator.isEmail(this.obj)) {
            this.isDataInvalid = true
            const validationError = new ValidationError(
                "Invalid email address",
                "invalid.email.address",
                this.fieldName
            )
            this.errors.push(validationError)
        }
        return this
    }

    protected isBlank = () => {
        if (this.obj && this.obj.trim().length === 0) {
            this.isDataInvalid = true
            const validationError = new ValidationError(
                "Empty value",
                "empty.value",
                this.fieldName
            )
            this.errors.push(validationError)
        }
        return this
    }

    protected isNull = () => {
        if (!this.obj) {
            this.isDataInvalid = true
            const validationError = new ValidationError(
                "Null value",
                "null.value",
                this.fieldName
            )
            this.errors.push(validationError)
        }
        return this
    }

    protected isSecretStrong = () => {
        if (!this.obj.match(this.secretRegex)) {
            this.isDataInvalid = true
            const validationError = new ValidationError(
                "Weak secret",
                "weak.secret",
                this.fieldName
            )
            this.errors.push(validationError)
        }
        return this
    }

    protected isMatching = (valueToCompare: string) => {
        if (this.obj.localeCompare(valueToCompare) != 0) {
            this.isDataInvalid = true
            const validationError = new ValidationError(
                "Values do not match",
                "value.mismatch",
                this.fieldName
            )
            this.errors.push(validationError)
        }
        return this
    }

    protected getFieldErrors = () => {
        return this.errors
    }
}