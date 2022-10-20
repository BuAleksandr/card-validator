export default class Widget {
  constructor() {
    this.createWindow();
  }

  createWindow() {
    const body = document.querySelector('body');
    const widgetWindow = document.createElement('div');
    widgetWindow.className = 'widget-window';
    body.append(widgetWindow);

    const widgetBankGallery = document.createElement('div');
    widgetBankGallery.className = 'widget-bank-gallery';
    widgetWindow.append(widgetBankGallery);

    const bankArray = ['visa', 'mastercard', 'american_express', 'mir'];
    for (let i = 0; i < bankArray.length; i += 1) {
      const bankPreview = document.createElement('div');
      bankPreview.className = 'bank-preview';
      bankPreview.classList.add(bankArray[i]);
      bankPreview.classList.add('no-active');
      widgetBankGallery.append(bankPreview);
    }

    const widgetForm = document.createElement('form');
    widgetForm.className = 'widget-form';
    widgetWindow.append(widgetForm);

    const widgetCardInput = document.createElement('input');
    widgetCardInput.className = 'widget-card-input';
    widgetForm.append(widgetCardInput);

    const widgetCardInputButton = document.createElement('button');
    widgetCardInputButton.className = 'widget-card-input-button';
    widgetCardInputButton.textContent = 'Click to Validate';
    widgetForm.append(widgetCardInputButton);

    const widgetHint = document.createElement('p');
    widgetHint.className = 'widget-hint';
    widgetHint.classList.add('hidden');
    widgetWindow.append(widgetHint);
  }
}
