function TemplatesStrings (BaseString) {
    BaseString.call(this, 'templates');

    const { t } = this;
    const ns = this.templates;

    ns.state = {
        LIST_BREADCRUMB_LABEL: t.s('TEMPLATES')
    };

    ns.list = {
        PANEL_TITLE: t.s('TEMPLATES'),
        ADD_BUTTON_LABEL: t.s('ADD'),
        ADD_DD_JT_LABEL: t.s('Job Template'),
        ADD_DD_WF_LABEL: t.s('Workflow Template'),
        ROW_ITEM_LABEL_ACTIVITY: t.s('Activity'),
        ROW_ITEM_LABEL_INVENTORY: t.s('Inventory'),
        ROW_ITEM_LABEL_PROJECT: t.s('Project'),
        ROW_ITEM_LABEL_CREDENTIALS: t.s('Credentials'),
        ROW_ITEM_LABEL_MODIFIED: t.s('Last Modified'),
        ROW_ITEM_LABEL_RAN: t.s('Last Ran'),
    };

    ns.prompt = {
        INVENTORY: t.s('Inventory'),
        CREDENTIAL: t.s('Credential'),
        OTHER_PROMPTS: t.s('Other Prompts'),
        SURVEY: t.s('Survey'),
        PREVIEW: t.s('Preview'),
        LAUNCH: t.s('LAUNCH'),
        SELECTED: t.s('SELECTED'),
        NO_CREDENTIALS_SELECTED: t.s('No credentials selected'),
        NO_INVENTORY_SELECTED: t.s('No inventory selected'),
        REVERT: t.s('REVERT'),
        CREDENTIAL_TYPE: t.s('Credential Type'),
        PASSWORDS_REQUIRED_HELP: t.s('Launching this job requires the passwords listed below. Enter and confirm each password before continuing.'),
        PLEASE_ENTER_PASSWORD: t.s('Please enter a password.'),
        credential_passwords: {
            SSH_PASSWORD: t.s('SSH Password'),
            PRIVATE_KEY_PASSPHRASE: t.s('Private Key Passphrase'),
            PRIVILEGE_ESCALATION_PASSWORD: t.s('Privilege Escalation Password'),
            VAULT_PASSWORD: t.s('Vault Password')
        },
        SHOW_CHANGES: t.s('Show Changes'),
        SKIP_TAGS: t.s('Skip Tags'),
        JOB_TAGS: t.s('Job Tags'),
        LIMIT: t.s('Limit'),
        JOB_TYPE: t.s('Job Type'),
        VERBOSITY: t.s('Verbosity'),
        CHOOSE_JOB_TYPE: t.s('Choose a job type'),
        CHOOSE_VERBOSITY: t.s('Choose a verbosity'),
        EXTRA_VARIABLES: t.s('Extra Variables'),
        PLEASE_ENTER_ANSWER: t.s('Please enter an answer.'),
        VALID_INTEGER: t.s('Please enter an answer that is a valid integer.'),
        VALID_DECIMAL: t.s('Please enter an answer that is a decimal number.'),
        PLAYBOOK_RUN: t.s('Playbook Run'),
        CHECK: t.s('Check'),
        NO_CREDS_MATCHING_TYPE: t.s('No Credentials Matching This Type Have Been Created')
    };
}

TemplatesStrings.$inject = ['BaseStringService'];

export default TemplatesStrings;
