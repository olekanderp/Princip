#!bin/bash

# PRINCIP prncp.org

# To generate no rules type:
# sudo bash THIS_SCRIPT_NAME.sh DEVICE_LINK_IN_DEV_DIRECTORY NEW_DEVICE_LINK_IN_DEV_DIRECTORY (you can type link as subdir)
# Example:
# sudo bash run.sh ttyUSB0 princip/usb0

dev=$1
path=$(udevadm info -q path -n /dev/$dev)
info=$(udevadm info -a -p $path)
kernels=$(echo $(grep -w 'KERNELS' <<< "$info") | cut -c30-36)
subsystems=$(echo $(grep -w 'SUBSYSTEMS' <<< "$info") | cut -c39-41)
id_vendor=$(echo $(grep -w 'ATTRS{idVendor}' <<< "$info") | cut -c19-22)
id_product=$(echo $(grep -w 'ATTRS{idProduct}' <<< "$info") | cut -c20-23)

file='/etc/udev/rules.d/10-local.rules'
if ! [ -f "$file" ]
then
        touch $file
fi

link=$2
if ! [[ -n "${link/[ ]*\n/}" ]]
then
        link="static_$1"
fi

line="ACTION==\"add\", KERNELS==\"$kernels\", SUBSYSTEMS==\"$subsystems\", ATTRS{idVendor}==\"$id_vendor\", ATTRS{idProduct}==\"$id_product\", SYMLINK=\"$link\""
echo "Generated line:"
echo $line

while true; do
    read -p "Do you wish to write changes to udev rules?" yn
    case $yn in
        [Yy]* ) echo $line >> $file; echo 'Changes writed.'; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

while true; do
    read -p "Do you wish to reboot the system?" yn
    case $yn in
        [Yy]* ) reboot; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
