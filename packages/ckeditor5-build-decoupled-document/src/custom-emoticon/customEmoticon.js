import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from './insertEmoticon.svg';



class CustomEmoticon extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'customEmoticon', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'emoticon',
                icon: imageIcon,
                tooltip: true
            } );

            view.on( 'execute', () => {
				if (window.openEmoticonPopover) {
					window.openEmoticonPopover(editor);
				}
            } );

            return view;
        } );
    }
}

export default CustomEmoticon;
