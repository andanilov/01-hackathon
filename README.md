## Hackaton #1
- [UML](https://drive.google.com/file/d/1JS2Be1Am_5BAkvkg1LL3H7StsncTb_Lp/view?usp=sharing)

## Modules
- MessageModule: Random message or famous quote output during some time
- ClickAnaliticModule: Clicks calculation by time
- LoggerModule: Activity history
- RandomShapeModule: Make random shape
- TimerModule: Make timer creator
- BackgroundColorModule: Simple background color
- LinearGradientModule: Complex background color
- RandomSoundModule: Human speech synthesizer

# Developer Documentation
## Add module:
1. Add Module script to ./src/modules/[moduleName].module.js
2. Import Module script in ./src/app.js. For exapmle: import { MessageModule } from './modules/message.module';
3. Initializate module in module list (./src/app.js). For example: const modules = [
  new MessageModule(), ...
];
4. Import module style if needed. For example: import './css/message.module.css';
5. Add module description in readme section 'Modules'
6. Add module icon (24p x 24px) to .src/assets/[molule-file-name].png, and add it to module css file (For example: li[data-type=LoggerModule]::before { background-image: url('../assets/logger.module.png') !important; }) (else it'll be default icon) 

# Components (for using in modules)
## MessagerComponent : src/components/messager.component
### add({text, title}, delay, type)
1. String text* - Message Text (necessarily)
2. String title - Message Title
3. Number delay - Lifetime (sec) default = 3 If 0 the message is permanent
4. String type - ClassName ('info'|'error'|'warning') default - 'info'
