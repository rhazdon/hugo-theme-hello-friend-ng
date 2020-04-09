# Because NPM chokes on Windows environment variables when run inside WSL,
# this script will turn all of that off.
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
sudo umount /mnt/c
echo "Remember, you don't have access to /mnt/c so the SSH key passthrough will no longer work on this shell instance."
