USE sdc;
COPY Detail (id, name, uniqueName, series, main_photo, fit_photo, case_size, case_thickness, strap_width, movement, glass, water_resistance, case_description, dial, dial_details, strap, interchangeable_strap, subdials) FROM '/Users/rudydimacali/Documents/GitHub/RESTwatch-SDC/MVMT-details-specs/data_generation/seedData1.csv' WITH HEADER = true;
