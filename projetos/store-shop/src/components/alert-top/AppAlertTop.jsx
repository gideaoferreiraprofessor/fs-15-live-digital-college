import { Message } from '@primereact/ui/message';

function AppAlertTop() {
  return (
    <Message.Root variant="simple" className="bg-black! flex justify-center w-full rounded-none!">
      <Message.Content className="w-300">
        <Message.Text className="text-white! text-center! w-full">
          Cadastre-se e ganhe 20% de desconto na sua primeira compra. <a href='#' className='border-b'>Cadastre-se agora</a>
        </Message.Text>
        <Message.Close className="text-white!">
          X
        </Message.Close>
      </Message.Content>
    </Message.Root>
  );
}

export default AppAlertTop