import rules from './src/utils/rules';
import Form from './src/form.js';
import Input from './src/input';
import Radio from './src/radio';
import Checkbox from './src/checkbox';
import Select from './src/select';
import Textarea from './src/textarea';
import Button from './src/button';
import Hint from './src/hint/hint';

export default {
    rules,
    Hint,
    components: {
        Form,
        Input,
        Radio,
        Checkbox,
        Select,
        Textarea,
        Button
    }
};
