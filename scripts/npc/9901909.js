var status = 0;

function start() {
	cm.sendOk ("�z�n�A�{�b���z���Хd�ǹC�ֶ黡��\r\n#b�p�z�O�ѻP�i�l��W�ŵf�X�j�i�����v��o\r\n#r���X�U�l(�O�q)�B���X�U�l(�ӱ�)�B���X�U�l(���O)�B���X�U�l(���B)�B�f�X�M�A�B�f�X��A�B�f�X�U�l\r\n#b�p�z�O�ѥ[�iBOSS�D�ԡj�h�i��o���������C\r\n#r�i�V���F�I���C\r\n#b�p�z�O�ѻP�i�l������ޡj\r\n#r�������v�������h�����ȹD��C\r\n#b�p�z�O�ѻP�i�l��J�|�j\r\n#r�i�J�a�ϫ�A�������v�����U�ظɫ~�C\r\n#b�p�z�O�ѻP�i����_�c�j\r\n#r�R���_�c�|�����U�����_�A��J���B�ɫ~�B�U�����b�B�L�k�ѡB�l��]�C\r\n#b�p�z�O�ѻP�i�l�곽���j\r\n#r������i��o�g��ȤQ�U�B�ΦU���L�k�ѡC\r\n#b�p�z�O�ѻP�i�S��ԭ@�a�ϡj\r\n#r�q�L�D�ԥi��o �I�� 100 �I �B ���� 5 �U�C\r\n#b�p�z�O�ѻP�i�D�ԳQ�D�G���¿ߡj\r\n#r�q�L�D�ԥi�������v�����U���ޯ�ѡC")
		}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
}
}
