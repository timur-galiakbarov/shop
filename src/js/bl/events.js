export default {
    APP: {
        READY: 'APP.READY'
    },
    POPUPS: {
        OPEN: {
            ADD: 'POPUP.ADD',
            EDIT: 'POPUP.EDIT'
        }
    },
    ACCOUNT: {
        STATED: 'ACCOUNT.STATED',//������ � ������������ ��������
        LOGOUT: 'ACCOUNT.LOGOUT',//������������ ������������
        VK: {
            AUTH: 'ACCOUNT.VK.AUTH',//����������� ���������
            LOGOUT: 'ACCOUNT.VK.LOGOUT',//����� �� ��
            INFO_READY: 'ACCOUNT.VK.INFO_READY',//������� � ���, ��� ������ ������ �� ��
        }
    },
    SHOP: {
        ITEM_CREATED: 'SHOP.ITEM.CREATED',//������� � ��������� � �� ������
        ITEM_REMOVED: 'SHOP.ITEM.REMOVED',//������� � ��������� � �� ������
    }
};