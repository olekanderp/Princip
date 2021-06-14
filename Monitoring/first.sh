#!/bin/bash
systemctl enable ssh
service ssh start
adduser devops
mkdir -p /home/devops/.ssh/
cd /home/devops/ && chmod 700 .ssh
chown devops:devops .ssh -R
if ! grep -Fxq "devops    ALL=NOPASSWD: ALL" /etc/sudoers
then
    echo "devops    ALL=NOPASSWD: ALL" >> /etc/sudoers
fi
if ! grep -Fxq "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHsdLGKRVw5UrdufbULZI9dapP9QQ7SidZEHJ9Cap2NL1aG5xYS6GxMf4corYDIIRtMS7ZreWqae4UPaHlGyaEWQXxEeAIbs10VHIQMNWcFisvEED3LlLptrKeyZeXIP4g1pACFGalX/dVBZEiCA6NdGVlbli9VGYUX0mx93Sv7HgPOOC/yW+eKve52ZDKAh/fE0WBGcjdaQnZ9v6dZym7lsb/8X4WgCLYMxL/HesLnIICZGEIlszyocB1zKgi7cPUiqEpwLbfI1kMZNiZL8eefG7IAC+bwWMuPDk9p5L3UAp/Nq2aGao6nx7NFu6fGFa5E2TffRdXPJrsEJWDE8yZ root@DENIS-NEW" /home/devops/.ssh/authorized_keys
then
    echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHsdLGKRVw5UrdufbULZI9dapP9QQ7SidZEHJ9Cap2NL1aG5xYS6GxMf4corYDIIRtMS7ZreWqae4UPaHlGyaEWQXxEeAIbs10VHIQMNWcFisvEED3LlLptrKeyZeXIP4g1pACFGalX/dVBZEiCA6NdGVlbli9VGYUX0mx93Sv7HgPOOC/yW+eKve52ZDKAh/fE0WBGcjdaQnZ9v6dZym7lsb/8X4WgCLYMxL/HesLnIICZGEIlszyocB1zKgi7cPUiqEpwLbfI1kMZNiZL8eefG7IAC+bwWMuPDk9p5L3UAp/Nq2aGao6nx7NFu6fGFa5E2TffRdXPJrsEJWDE8yZ root@DENIS-NEW" >> /home/devops/.ssh/authorized_keys
fi
cd /home/devops/.ssh && chmod 600 authorized_keys
chown devops:devops authorized_keys -R
datadev=$(date +"%m-%y")
sernum=$(cat /proc/cpuinfo | grep Serial | awk '{print $3}')
read -p "Enter HOST prefix: "  prefix
read -p "Enter COMPANY name: "  company
echo "$company" > /etc/picompany
echo $prefix'-'$datadev'-'$sernum
hostname $prefix'-'$datadev'-'$sernum
echo "$prefix-$datadev-$sernum" > /etc/hostname
if ! grep -Fxq "127.0.0.1       $prefix-$datadev-$sernum" /etc/hosts
then
    echo "127.0.0.1       $prefix-$datadev-$sernum" >> /etc/hosts
fi

