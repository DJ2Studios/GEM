# GEM
GEM is the revolutionary "Group Event Manager" web application that will supercharge all of your friendly gatherings.
It provides you with a turn-key solution to your own custom calendar, easy visualizations of different available events and times, a date/time polling feature allowing all audiences to get involved on finding the best times, and a comment section for improved communication and integration.
Gone are the days of one person trying to get people together and having to jump through hoops just to organize your friends. All of your scheduling and communication applications have hyperconverged to create GEM, your schedule's new best friend.


#Installation Steps
1. Go to https://github.com/DJ2Studios/GEMVagrant to download the vagrant script
2. Run the vagrant script with 'vagrant up'
  1. Use 'vagrant reload --provision' if necessary
3. Go to localhost:3000 to access the website

##Slim Setup
1. 'vagrant ssh' into the machine
2. cd /etc/apache2/sites-available
3. edit the file (ex. 'vi default', hope you know basic vi)
  1. navigate to <Directory /var/www/> 
  2. Change 'AllowOverride None' to 'AllowOverride All'
3. sudo service apache2 restart
