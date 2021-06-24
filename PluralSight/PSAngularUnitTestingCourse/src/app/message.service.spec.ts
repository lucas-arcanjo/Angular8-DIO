import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService

    it('should have no message to start', () => {
        service = new MessageService();
        
        expect(service.messages.length).toEqual(0);
    })

    it('should add a message when add is called', () => {
        service = new MessageService();

        service.add('testing');

        expect(service.messages.length).toEqual(1);
    })

    it('should remove all messages when clear is called', () => {
        service = new MessageService();
        service.add('testing1');
        
        service.clear();

        expect(service.messages.length).toEqual(0)
    })
})